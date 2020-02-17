import { database } from './../data/data.store';
import { IResolvers } from "graphql-tools";

const query : IResolvers = {
    Query: {
        estudiantes(): any {
            return database.estudiantes;
        }
    }
}

export default query;