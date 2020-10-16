import React, { Component } from "react";
import api from "../api";

import PageLoading from "../components/PageLoadingCircle";
import PageError from "../components/PageError";
import BadgeDetails from "./BadgeDetails";

import "./styles/BadgeDetails.css";

export class BadgeDetailsContainer extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };
  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <BadgeDetails badge={this.state.data}/>
    );
  }
}

export default BadgeDetailsContainer;
