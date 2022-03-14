import React from 'react';

class Cartitem extends React.Component {
    render () {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style = {styles.image} alt="not loaded"/>
                </div>
                <div className="right-block">
                    <div style = {{color: '#111'}}>Phone</div>
                    <div style = {styles.font}>Rs 999</div>
                    <div style = {styles.font}>Qty: 1</div>
                    <div className="cart-item-actions">
                        { }
                    </div> 
                </div>

            </div>
        )
    }

}
const styles = {
    image : {
        height : 110,
        width : 110,
        borderRadius : 4,
        backgroundColor : '#ccc'
    },
    font: {
        fontSize : 25,
        color : '#777'
    }
}
export default Cartitem