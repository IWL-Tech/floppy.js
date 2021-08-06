const fetch = require("node-fetch");
const { Request } = require("../util/request");

class Message {
  constructor(data = null) {
    if (data) {
      this._data = data;
      this.type = data.type;
      this.tts = data.tts;
      this.timestamp = data.timestamp;
      this.referenced_message = data.referenced_message;
      this.pinned = data.pinned;
      this.nonce = data.nonce;
      this.mentions = data.mentions;
      this.mention_roles = data.mention_roles;
      this.mention_everyone = data.mention_everyone;
      this.member = data.memberl
      this.id = data.id;
      this.flags = data.flags;
      this.embeds = data.embeds;
      this.edited_timestamp = data.edited_timestamp;
      this.content = data.content;
      this.components = data.components;
      this.channel_id = data.channel_id;
      this.author = data.author;
      this.attatchments = data.attatchments;
      this.guild_id = data.guild_id;
      this.channel = null;
    }
  }
  async reply(content) {
    let mmmm = {
      content: content,
      message_reference: {
        message_id: this.id,
        guild_id: this.guild_id,
        fail_if_not_exists: false,
      },
    };
    const req = new Request(`/channels/${this.channel_id}/messages`, mmmm);
    req.request("POST");
  }
}

module.exports = { Message };
