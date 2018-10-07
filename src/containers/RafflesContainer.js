import { connect } from "react-redux";
import RafflesComponent from "../components/Raffles/RafflesComponent";
import { fetchRafflesIfNeeded,invalidateRaffles } from "../actions/raffles";


const mapDispatchToProps = {
  fetchRafflesIfNeeded,
  invalidateRaffles
};

const mapStateToProps = state => {
  const { raffles } = state;
  const { isFetching, lastUpdated, items: raffleList } = raffles || {
    isFetching: true,
    items: []
  };

  return {
    raffleList,
    isFetching,
    lastUpdated
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(RafflesComponent);
