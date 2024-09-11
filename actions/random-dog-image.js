
  const axios = require('axios')
  /**
   * Get Random Image of Dog
   * @title RandomDogImage
   * @category Custom
   * @author Jay Pandya
   */
  const RandomDogImage = async () => {
    session.dog_image_response == undefined
    session.dog_image_error == undefined
    try {
      const { data } = await axios.get('https://dog.ceo/api/breeds/image/random')
      session.dog_image_response = data
    } catch (error) {
      session.dog_image_error = error
      // Prepare the message
      const message = {
        type: 'text',
        text: 'Sorry, Something wrong happened, Please try Later.',
        // Markdown enables rich content, for example links or bold text. Otherwise, content will be displayed as-is
        markdown: true
      }

      // Send the message to the user (note the array, since you can send multiple payloads in the same reply)
      await bp.events.replyToEvent(event, [message])
    }

    return
  }

  return RandomDogImage()