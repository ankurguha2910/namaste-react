import React from "react";

class UserClassComponent extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            count: 0,
            count2: 1,
            response: {
                name: 'Dummy',
                location: 'Dummy location',
                email: 'test@gmail.com'
            }
        }

        console.log(this.props.name + "Child Constructor");
    }

    render()
    {
        console.log(this.props.name + "Child Render");
        const {count} = this.state;
        const {name, location, email, avatar_url} = this.state.response
        return (
            <div>
                <h1>Count = {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: count + 1
                    })
                }}>Count Increase</button>
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Email: {email}</h4>
            </div>
        )
    }

    async componentDidMount()
    {
        console.log(this.props.name + "Child component did mount");
        this.timer = setInterval(() => {
            console.log("Hello")
        }, 1000)
        const data = await fetch("https://api.github.com/users/ankurguha2910");
        const json = await data.json();
        this.setState({
            response: json
        })
    }

    componentDidUpdate()
    {
        console.log(this.props.name + "Component Did Update")
    }

    componentWillUnmount()
    {
        console.log(this.props.name + "Component Will Unmount")
        clearInterval(this.timer);
    }
}

export default UserClassComponent;