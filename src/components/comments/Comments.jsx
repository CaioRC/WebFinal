import React, { Component } from "react";
import { connect } from 'react-redux'

import { getCommentsByID, saveComment } from "../../Api"
import CommentsItem from "../commentsItem/CommentsItem";
import FormInput from '../form-input/FormInput'
import CustomButton from '../CustomButton/CustomButton'

import "./Comments.css"

//to do: Fazer tela de loading

class Comments extends Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            comentario: ""
        }
    }

    componentDidMount() {
        this.callCommentsApi()
    }

    async callCommentsApi() {
        const comments = await getCommentsByID(this.props.id)
        this.setState({
            comments: comments
        })
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { comentario } = this.state

        try {
            const enviarcomentario = await saveComment(this.props.currentUser.id, this.props.currentUser.nome, this.props.id, this.state.comentario)

            this.setState({
                comentario: "",
            })

            alert("Comentário enviado com sucesso")

        } catch (err) {
            console.log(err)
        }
    }
    render() {
        return (
            <div className="comments">
                <div className="commentsContent">
                    <h1>Comentários</h1>
                    {   this.props.currentUser ?
                        <form className="commentsForm" onSubmit={this.handleSubmit}>
                            <FormInput
                                type='text'
                                name="comentario"
                                value={this.state.comentario}
                                onChange={this.handleChange}
                                label="Escreva seu comentário"
                                size={230}
                                required
                            />
                            <CustomButton  type="submit">Enviar</CustomButton>
                        </form>: null
                        }
                    <div className="commentsItem">
                        {
                            this.state.comments ? this.state.comments.map(commentsData =>
                                <CommentsItem key={commentsData.id} {...commentsData} />
                            ) : null
                        }
                    </div>


                </div>
            </div>
        )
    }
}




const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
})

export default connect(mapStateToProps)(Comments);
