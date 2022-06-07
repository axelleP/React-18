//rque : je laisse délibérément l'utilisation du state ici pour avoir un exemple
import {Component} from 'react'

class EmailInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
        }
    }
    
    updateInputValue = (value) => {
        this.setState({ inputValue: value })
    }
    
    render() {
        return (
            <span>
                {this.state.inputValue}
                &nbsp;&nbsp;
                <input placeholder="Entrez votre email" onChange={(e) => this.updateInputValue(e.target.value)} />
            </span>
        )
    }
}

export default EmailInput