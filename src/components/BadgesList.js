import React from "react";
import "../pages/styles/BadgesList.css";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

function useSerchBadges(badges){
  const [query, setQuery] = React.useState("");

  const [filteredBadges, setFilteredBadges] = React.useState(badges)

  /**Filtrar badges */

  React.useMemo(()=>{
   const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    })

    setFilteredBadges(result)
  },[badges, query]);
  return {query,setQuery, filteredBadges}
}

function BadgesList(props) {
  const badges = props.badges;

  const {query, setQuery, filteredBadges} = useSerchBadges(badges)

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No encontramos nungun badge</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Crea tu primer badge
        </Link>
      </div>
    );
  }

  return (
    <div className="badgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id} className="BadgesListItem">
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <Gravatar
                  className={"BadgesListItem__avatar"}
                  email={badge.email}
                />
                <div>
                  <p>
                    <strong>
                      {badge.firstName} {badge.lastName}
                    </strong>
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-twitter"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2196F3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
                  </svg>
                  @{badge.twitter}
                  <p>{badge.jobTitle}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
