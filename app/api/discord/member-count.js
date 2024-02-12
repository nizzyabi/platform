// pages/api/member-count.js
import { Client } from 'discord.js';

export default async (req, res) => {
  const client = new Client();
  try {
    await client.login(process.env.BOT_TOKEN);
    const guild = client.guilds.cache.get(process.env.GUILD_ID);
    if (!guild) throw new Error('Guild not found');

    const memberCount = guild.memberCount;
    res.status(200).json({ memberCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch member count' });
  } finally {
    client.destroy();
  }
};
