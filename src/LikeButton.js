import React from 'react';

/**
 *  1. 在 constructor  中绑定this
 *  2. 调用时使用箭头函数，定义时使用箭头函数。
 *  3. constructor  定义箭头函数
 */
class LikeButton extends React.Component {

    // 在 constructor  中绑定this
    handleClick(){
        this.setState({liked: !this.state.liked});
    }

    //  使用箭头函数调用
    handleClick2(e){
        this.setState({liked2: !this.state.liked2});
    }
    //  定义使用箭头函数
    handleClick3 = (e) => {
        this.setState({liked3: !this.state.liked3});
    }

    constructor(props){
        super(props);
        this.state = {
            liked: false,
            liked2:false,
            liked3:false,
            liked4:false
        };
        this.handleClick = this.handleClick.bind(this) ;//构造函数内绑定
        this.handleClick4 = (e) => {
            this.setState({liked4: !this.state.liked4});
        }
    }
    /*
    _bind(...methods){
        methods.forEach((method)=>this[method]=this[method].bind(this));
    }
    constructor(){
        this._bind('handleClick', 'handleClick2');   //构造函数内绑定
    }
    */

    render() {
        var text = this.state.liked ? '喜欢' : '不喜欢';
        var text2 = this.state.liked2 ? '喜欢' : '不喜欢';
        var text3 = this.state.liked3 ? '喜欢' : '不喜欢';
        var text4 = this.state.liked4 ? '喜欢' : '不喜欢';
        return (
            <div>
            <p onClick={this.handleClick}>
             1.你<b>{text}</b>我。点我切换状态。
             </p> 
             <p onClick={ ()=>{ this.handleClick2() } }>
             2.你<b>{text2}</b>我。点我切换状态。
             </p> 
             <p onClick={this.handleClick3}>
             3.你<b>{text3}</b>我。点我切换状态。
             </p> 
             <p onClick={this.handleClick4}>
             4.你<b>{text4}</b>我。点我切换状态。
             </p> 
             </div>
         );
    }
}
export default LikeButton;