const gqlQueries = `#graphql
  query AuthorQuery($id: ID!) {
    author(id: $id){
      name
      reviews {
        rating
        content
      }
    }
  }

  query ReviewQuery($id: ID!) {
    review(id: $id){
      rating
      game {
        title
        platform
        reviews {
          rating
        }
      }
      author {
        name
        verified
      }
    }
  }

  query Games {
    games {
      id
      title
      platform
    }
  }

  mutation DeleteMutation($id: ID!) {
    deleteGame(id: $id) {
      id
      title
      platform
    }
  }

  mutation AddMutation($game: AddGameInput!) {
    addGame(game: $game) {
      id
      title
      platform
    }
  }
`;

/* 
  Variables:
  {
    "id": "2"
  }


  {
    "game": {
      "title": "a new game",
      "platform": ["switch", "ps5"]
    }
  }
*/
