import notifier from 'node-notifier'

const notification = (title = '', subtitle = '', message = '') => {
    return notifier.notify({
        title: title,
        subtitle: subtitle,
        message: message,
        sound: false,
        contentImage: './.gulp/tasks/notifications/nick-cage.jpg'
    })
}

export default notification
