import { connect } from "react-redux";
import TournamentsComponent from "../components/Tournaments/TournamentsComponent";
import {
  fetchTournamentsIfNeeded,
  invalidateTournaments
} from "../actions/tournaments";

const mapDispatchToProps = {
  fetchTournamentsIfNeeded,
  invalidateTournaments
};

const mapStateToProps = state => {
  const { tournaments } = state;
  const { isFetching, lastUpdated, items: tournamentList } = tournaments || {
    isFetching: true,
    items: []
  };

  return {
    tournamentList,
    isFetching,
    lastUpdated
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TournamentsComponent);
