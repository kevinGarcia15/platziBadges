import React, { Component } from 'react'
import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import { Link } from 'react-router-dom'
import PageError from '../components/PageError'

import api from '../api'

export class Badges extends Component {
    /**El constructor recibe props y se sugiere que sea el lugar
     * donde se inicialicen estados
    */
    constructor(props){
        super(props);
        this.state={
            loading:true,
            error: null,
            data: undefined,
        }
    }

    componentDidMount(){
        console.log('component did mount')
       this.fetchData()     
    }
/**Esta es la forma de hacer una peticion get a una API */
    fetchData = async()=>{
        this.setState({loading:true, error:null})
        try {
            const data = await api.badges.list()
            this.setState({loading:false, data:data})
        } catch (error) {
            this.setState({loading: false, error:error})
        }
    }
    render() {
        if (this.state.loading === true) {
            return <PageLoading/>
        }
        if (this.state.error) {
            return <PageError error={this.state.error}/>
        }

        console.log('second/Four Render')
        return (
            <React.Fragment>
                <div className='Badges'>
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className='Badges_conf-logo' src={confLogo} alt="Conf Logo"/>
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>
                </div>

                <div className='Badges__list'>
                    <div className="Badges__container">
                        <BadgesList badges={this.state.data} loading={this.state.loading}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges
