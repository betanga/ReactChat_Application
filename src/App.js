import React, {Component} from 'react';

import Chat from './components/chat';

class App extends Component{
    render() {
        return(
            <div>
                <div>
                    <h1 className="font-sans text-center mt-4 w-96 m-auto rounded-t-lg border text-4xl font-bold bg-gray-500 text-white border-gray-500 py-2">ReactChat</h1>
                    <Chat />
                </div>
                <div className="text-center mt-10 text-gray-300">
                    by <a className="hover:text-blue-600"href="https://github.com/betanga" target="_blank" rel="noopener noreferrer">@betanga</a>
                </div>
            </div>
            
        )
    }
}

export default App;