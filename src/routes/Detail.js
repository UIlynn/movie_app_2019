import React from 'react';




class Detail extends React.Component{

    // 최초의 render이후 -> componentDidMount
    componentDidMount(){
        // console.log(this.props); // 우리가 원하는 데이터가 location.state에 있음
        const {location, history} = this.props;
        
        // movie-detail로 바로 접속할 경우 props가 없으므로 리다이렉트
        // history에는 url을 변경할 수 있는 여러 메소드가 들어있다
        if (location.state===undefined){
            history.push('/'); // push : 어디에 있던 해당 url로 이동
        }
    }

    render(){
        const {location} = this.props;
        if (location.state){
            return <span>{location.state.title}</span>
        }else{
            return null;
        }
    }
}

export default Detail;