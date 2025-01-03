require('dotenv').config(); // Load environment variables

module.exports = {
    prefix: process.env.PREFIX || '.', // Command prefix
    ownerName: process.env.OWNER_NAME || 'Abyss', // Owner name
    ownerNumber: process.env.OWNER_NUMBER || '12343438187', // Your WhatsApp number
    mode: process.env.MODE || 'public', // Bot mode: 'public' or 'private'
    region: process.env.REGION || 'USA', // Region
    botName: process.env.BOT_NAME || 'OPUEH', // Bot name
    exifPack: process.env.EXIF_PACK || 'ABYSS V3', // Sticker pack name
    exifAuthor: process.env.EXIF_AUTHOR || 'Abyss', // Author of the sticker pack
    timeZone: process.env.TIME_ZONE || 'USA\NYC', // Time zone
    presenceStatus: process.env.PRESENCE_STATUS || 'recording', // Bot presence status
    autoRead: process.env.AUTO_READ === 'false', // Auto-read messages (true or false)
    autoViewStatus: process.env.AUTO_VIEW_STATUS === 'true', // Auto-view statuses (true or false)
    autoReact: process.env.AUTO_REACT === 'false', // Auto-react (true or false)
    sessionId: process.env.SESSION_ID || ''// Add Your Session ID here
};
