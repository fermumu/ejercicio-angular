import { Curso } from "src/app/models/curso-to";

export const cursos: Curso[] = [
    {
        materia: 'Fisica',
        dificultad: 8,
        requiere:'matematicas'
    },
    {
        materia: 'JavaScript',
        dificultad: 8,
        requiere:'HTML, CSS'
    },
    {
        materia: 'React Js',
        dificultad: 7,
        requiere:'JavaScript, HTML, CSS'
    },
    {
        materia: 'TypeScript',
        dificultad: 9,
        requiere:'JavaScript'
    }
]