import { connection } from "../../database/db";
import { StreamingService } from "../../protocols";
import { QueryResult } from "pg";

async function selectStreamingServices(): Promise<
  QueryResult<StreamingService>
> {
  return await connection.query(
    `
        SELECT 
            id AS streaming_service_id, 
            name AS streaming_service_name 
        FROM streaming_services;
        `
  );
}

const streamingServicesRepositoy = {
  selectStreamingServices,
};

export default streamingServicesRepositoy;
