import React from 'react'

function debounce(fn, ms) {
    let timer
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    };
}

export default function ScreenSize() {
    const [dimensions, setDimensions] = React.useState({
        width: window.innerWidth
    })
    React.useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                width: window.innerWidth
            })
        }, 500)

        window.addEventListener('resize', debouncedHandleResize)

        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)

        }
    })
    return dimensions.width
}


