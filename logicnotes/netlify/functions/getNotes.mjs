import faunadb from 'faunadb';
import cors from 'cors';

const { Client, Paginate, Documents } = faunadb.query;

exports.handler = async (event, context) => {
  if (event.httpMethod === 'OPTIONS') {
    // Handle preflight request
    return {
    statusCode: 200,
    headers: {
        'Access-Control-Allow-Origin': '*', // or your specific frontend URL
        'Access-Control-Allow-Methods': 'OPTIONS, POST, PATCH',
        'Access-Control-Allow-Headers': 'Content-Type',
    },
    body: '',
    };
}
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
      headers: {
        'Access-Control-Allow-Origin': '*', // or your specific frontend URL
        'Access-Control-Allow-Methods': 'OPTIONS, POST, PATCH',
        'Access-Control-Allow-Headers': 'Content-Type',
    },
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
      headers: {
        'Access-Control-Allow-Origin': '*', // or your specific frontend URL
        'Access-Control-Allow-Methods': 'OPTIONS, POST, PATCH',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    };
  }
};

// Enable CORS for the function
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with the origin of your frontend application
  credentials: true,
};

export const handlerWithCors = cors(corsOptions)(handler);
export { handlerWithCors as handler };