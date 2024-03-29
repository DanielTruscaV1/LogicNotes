import faunadb from 'faunadb';

const q = faunadb.query;

export const handler = async (event, context) => {
	try {
      const { id } = event.queryStringParameters;

      const client = new faunadb.Client({
        secret: process.env.VITE_FAUNADB_KEY,
      });

      const collection = q.Collection('Notes');
      const index = 'getNoteById';
      
      const query = q.Get(
        q.Match(q.Index(index), id)
      );

    const { data } = await client.query(query);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        /* Required for CORS support to work */
        'Access-Control-Allow-Origin': '*',
        /* Required for cookies, authorization headers with HTTPS */
        'Access-Control-Allow-Credentials': true
      },
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
      headers: {
        /* Required for CORS support to work */
        'Access-Control-Allow-Origin': '*',
        /* Required for cookies, authorization headers with HTTPS */
        'Access-Control-Allow-Credentials': true
      },
    };
  }
}
/*
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
        'Access-Control-Allow-Methods': 'GET, OPTIONS, POST, PATCH',
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
        'Access-Control-Allow-Methods': 'GET, OPTIONS, POST, PATCH',
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
        'Access-Control-Allow-Methods': 'GET, OPTIONS, POST, PATCH',
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
*/