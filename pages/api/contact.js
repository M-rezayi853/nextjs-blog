import { MongoClient } from 'mongodb'

async function handler(req, res) {
  if(req.method === 'POST') {
    const { email, name, message } = req.body

    if(
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' })
      return
    }

    // Store it in a database
    const newMessage = {
      email,
      name,
      message
    }
    
    let client

    try {
      client = await MongoClient.connect(
        'mongodb+srv://m-hazara-77-1234:m-hazara-77-1234@cluster0.n9xn2.mongodb.net/my-site?retryWrites=true&w=majority'
      )
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' })
      return
    }

    const db = client.db('my-site')

    try {
      const result = await db.collection('messages').insertOne(newMessage)
      newMessage.id = result.insertedId
    } catch (error) {
      res.status(500).json({ message: 'Storing message failed!' })
      client.close()
      return
    }

    client.close()
    
    res.status(201).json({ message: 'Successfuly stored message!', message: newMessage })
  }
}

export default handler