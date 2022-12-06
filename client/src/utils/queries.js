import { gql } from '@apollo/client';
export const ALL_MATCHUPS = gql`
	{
		query
		getAllMatchups {
			tech1
			tech2
			tech1_votes
			tech2_votes
		}
	}
`;

// export const getAllTechnical = () => {};

// export const getMatchup = (matchupId) => {};
