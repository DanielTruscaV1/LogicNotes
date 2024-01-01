import faunadb from 'faunadb';

const { Client, Paginate, Documents } = faunadb.query;

exports.handler = async (event, context) => {
  try {
    const client = new Client({
      secret: process.env.VITE_FAUNADB_KEY,
    });

    const { data } = await client.query(
      Documents(Paginate(Match(Index('allNotes'))))
    );

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
