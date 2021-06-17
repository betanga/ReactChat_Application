import React, { Component } from 'react';

class Chat extends Component{
    constructor() {
        super();
        this.state = {
            fetching: false,
            message: '',
            messages: [
                {id: 0, text:'¡Ha!'},
                {id: 1, text:'¿I love?'},
                {id: 2, text:'Hehe', bot: true}            ]
        }
    }

    updatMessage(e) {
        this.setState({message: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();

        if( !this.state.message ){
            return false;
        }
    
        const list = this.state.messages;
        const newMessage = {
            text: this.state.message
        };
        list.push(newMessage);
        this.setState({messages: list});
        this.setState({message: ''});

        setTimeout(() => {
            document.getElementById("messages").scrollTop = 99999999
        }, 10)


        setTimeout(() => {
            this.setState({fetching: true});
            const id_query = Math.floor(Math.random() * 500 )
            fetch(`https://jsonplaceholder.typicode.com/comments/${ id_query }`)
                .then(response => response.json())
                .then( data => {
                    setTimeout(() => {
                        const list = this.state.messages;
                        const newMessage = {
                            text: data.name,
                            bot: true
                        };
                        list.push(newMessage);
                        this.setState({messages: list});
                        this.setState({fetching: false});
                    
                        setTimeout(() => {
                            document.getElementById("messages").scrollTop = 99999999
                        }, 10)
                    }, 2000)
                } )
        }, 1100)
    }

    render(){
        const { messages } = this.state;
        const messagesList = messages.map((message, index) => {
            return <li
                key={ index }
                className={ `mt-1 flex ${ message.bot ? "justify-start" : "justify-end" }` }
            >
                <div
                    className="bg-white w-auto rounded p-2 shadow break-all"
                    style={ {
                        maxWidth: 180
                    } }
                >
                    {message.text}
                </div>
            </li>
        })
        return (
            <div className="rounded-b-lg shadow-lg border w-96 px-5 pt-5 m-auto">
                <div className="w-88 m-auto">
                    <ul id="messages" className="bg-gray-300 p-5 max-h-64 overflow-auto">
                        {messagesList}
                    </ul>
                </div>
                { this.state.fetching && (
                    <div
                        className="text-gray-400 text-xs mt-1"
                    >is typing...</div>
                ) }
            <form className="flex justify-center" onSubmit = {this.handleSubmit.bind(this)}>
                <div className="w-96 flex items-center">
                    <input 
                        className="border border-r-0 bg-blue-100 rounded-l w-full py-1 my-6 pl-2 outline-none"
                        type="text"
                        value={this.state.message}
                        onChange={this.updatMessage.bind(this)}
                        placeholder="Ingresar texto"
                    />
                    <button className="bg-blue-400 border hover:bg-blue-600 border-blue-300 cursor-pointer px-2 py-1 text-white rounded-r">
                        Send
                    </button>
                </div>
            </form>
            </div>
        )
    }
}
            

export default Chat;