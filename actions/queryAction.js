const database = require("./database");

async function queryAction(bp, event, args) {
  const tableName = event.state.session.tableName;
  if (tableName) {
    const query = `SELECT * FROM ${tableName}`;
    database.executeQuery(query, (result) => {
      if (result) {
        // Process the query result and send a response to the user
        let response = "Here is the information you requested:\n";
        for (const row of result) {
          response += `Row: ${JSON.stringify(row)}\n`;
        }
        bp.cms.renderElement(
          "QueryContent",
          { response },
          event.channel,
          event.botId
        );
      } else {
        bp.cms.renderElement(
          "QueryContent",
          { response },
          event.channel,
          event.botId
        );
      }
    });
  } else {
    bp.cms.renderElement(
      "QueryContent",
      { response },
      event.channel,
      event.botId
    );
  }
}

return queryAction;
