import faunadb from 'faunadb';

const q = faunadb.query;

import bcrypt from "bcryptjs";

const verifyPassword = async (plainPassword, hashedPassword) => {
  try {
    const passwordMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return passwordMatch;
  } catch (error) {
    throw error;
  }
};

export const handler = async (event, context) => {
  if (event.httpMethod === 'OPTIONS') {
    // Handle preflight request
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // or your specific frontend URL
        'Access-Control-Allow-Methods': 'OPTIONS, POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    };
  }
	try {
      const client = new faunadb.Client({
        secret: process.env.VITE_FAUNADB_KEY,
      });

    const { email, password } = JSON.parse(event.body);

    console.log(email);

    const response = await client.query(
        q.Get(q.Match(q.Index('getAccount'), email))
    );

    const account_data = response.data;

    console.log(account_data); 
    
    const hashed_password = account_data.password;

    console.log(password);
    console.log(hashed_password);

    const match = await verifyPassword(password, hashed_password);

    if(match)
    {
      return {
        statusCode: 200,
        body: JSON.stringify(response.data),
        headers: {
          /* Required for CORS support to work */
          'Access-Control-Allow-Origin': '*',
          /* Required for cookies, authorization headers with HTTPS */
          'Access-Control-Allow-Credentials': true
        },
      }
    }
    else 
    {
      return {
        statusCode: 200,
        body: "Sign-in failed.",
        headers: {
          /* Required for CORS support to work */
          'Access-Control-Allow-Origin': '*',
          /* Required for cookies, authorization headers with HTTPS */
          'Access-Control-Allow-Credentials': true
        },
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
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