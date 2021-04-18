import React from 'react'
import '../App.css';

function footer() {
    return (
        <div className="footer">
           <div><h3> <a href='https://goo.gl/maps/eirWmUzCbTqeu9bK7'> Adress</a> Rue Kaled Ibn Walid ,Tunis </h3></div> 
           <div>
           <img 
               src="https://oc-static.imgix.net/prod/images/home/image_hp_banner.png?v4&auto=compress,format&q=80&w=468&h=390&dpr=1" width='300px ' height='200px'
               alt="Footer"
            />
             </div> 
            <div>
            <table>
                <td>
                © Copyright 2021. All Rights Reserved,
                </td>
                <td>
                    Enjoy !!
                </td>
                <tr>
                    Merci de nous rejoindre chez nos agences : 
                </tr>
                <tr>
                Tunis, Nabeul, Sousse, Sfax
                </tr>
            </table>
            </div>
            
        </div>
    )
}

export default footer
