import React from 'react';
import '../Reset/reset.component.css';



export const Reset = ()=> {
    return(
        <>  
     <div className="main" style={{ backgroundImage: 'url(../images/outdoor.jpg)', backgroundSize: "cover" }}>  
       <div className="form-container">
           <form className="form-wrap">
              <h2>Forgot Password</h2>
                  <div className="form-box">
                  <label>New Password</label>
                      <input type="password" name="npassword" />
                   <label>Confirm Password</label>
                      <input type="password" name="cpassword" />
                  </div>
                 <div className="form-submit">
                      <input type="submit" value="Done" />
                </div>
           </form>
        </div>
    </div>
        </>
    )
}