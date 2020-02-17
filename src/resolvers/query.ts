import { database } from "./../data/data.store";
import { IResolvers } from "graphql-tools";

const query: IResolvers = {
  Query: {
    estudiantes(): any {
      return database.estudiantes;
    },
    estudiante(__: void, { id }): any {
      const resultado = database.estudiantes.filter(
        estudiante => estudiante.id === id
      )[0];
      if (resultado === undefined) {
        return {
          id: "-1",
          name: `No se ha encontrado el estudiante con el Id ${id}`,
          email: "",
          courses: []
        };
      }
      return resultado;
    },
    cursos(): any {
      return database.cursos;
    },
    curso(__: void, { cursoID }): any {
      const resultado = database.cursos.filter(
        curso_ => curso_.id === cursoID
      )[0];
      if (resultado === undefined) {
        return {
          id: "-1",
          title: `No se ha encontrado el curso con el Id ${cursoID}`,
          description: '',
          clases: -1,
          time: 0.0,
          logo: '',
          level: 'TODOS',
          path: '',
          teacher: '',
          reviews: []
        };
      }
      return resultado;
    }
  }
};

export default query;
