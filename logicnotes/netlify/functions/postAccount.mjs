import faunadb from 'faunadb';

const q = faunadb.query;

import bcrypt from "bcryptjs";

const hashPassword = async (password) => {
  try {
    const saltRounds = 10;

    const salt = await bcrypt.genSalt(saltRounds);

    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
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

    const unhashed_data = JSON.parse(event.body);

    console.log(unhashed_data);

    const hashedPassword = await hashPassword(unhashed_data.password);

    console.log(hashedPassword);

    const data = {
      first_name: unhashed_data.first_name,
      last_name: unhashed_data.last_name,
      email: unhashed_data.email,
      password: hashedPassword,
    }

    console.log(data);

    const response = await client.query(
        q.Create(
            q.Collection('Accounts'),
            {data}
        )
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response),
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