import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../../components/CustomButton/CustomButton";

import TOPICSDATA from "../../assets/TopicsData";

import { saveArticle , putArticle} from '../../Api'


import './ArticleWrite.css';

class ArticleWrite extends Component {
    constructor() {
        super();

        this.state = {
            title: "",
            description: "",
            content: "",
            topic: "frontend"
        }
    }

    componentDidMount() {
        if (this.props.location.state.alterar) {
            this.setState({
                title: this.props.location.state.titulo,
                description: this.props.location.state.descricao,
                content: this.props.location.state.conteudo,
                topic: this.props.location.state.categoria
            })
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { title, description, content, topic } = this.state;

        if (this.props.location.state.alterar) {
            const sendPut = await putArticle(this.props.location.state.id, title, description, content, topic,this.props.currentUser.id)

            alert("Artigo Alterado com sucesso")
        } else {

            const send = await saveArticle(title, description, content, topic, this.props.currentUser.id);


            alert("Artigo publicado com sucesso")
        }
        this.setState({
            title: "",
            description: "",
            content: "",
            topic: "frontend"
        })

        // this.props.history.push("")
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return this.props.currentUser ?
            < div className="articleWrite" >
                <form onSubmit={this.handleSubmit} className="articleForm">
                    <FormInput
                        name="title"
                        type="text"
                        label="Título"
                        handleChange={this.handleChange}
                        value={this.state.title}
                        required
                    />

                    <FormInput
                        name="description"
                        type="text"
                        label="Descrição"
                        handleChange={this.handleChange}
                        value={this.state.description}
                        required
                    />

                    <div className='topicOption'>
                        <span>Tópico: </span>
                        <select name="topic" id="topic" onChange={this.handleChange}>
                            {
                                TOPICSDATA.topics.map(topicData =>
                                    <option value={topicData.url}>{topicData.name}</option>
                                )
                            }
                        </select>

                    </div>

                    <textarea
                        name="content"
                        type="text"
                        placeholder="Conteudo"
                        value={this.state.content}
                        onChange={this.handleChange}
                        cols="100"
                        rows="35"
                        required
                    />
                    <div className='buttonsArticle'>
                        <CustomButton className="publishbutton" type="submit">Publicar</CustomButton>
                    </div>
                </form>
            </div >
            :
            <h3>Por favor logue-se para escrever um artigo.</h3>
    }


}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
})


export default connect(
    mapStateToProps
)(ArticleWrite)