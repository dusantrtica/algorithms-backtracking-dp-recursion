/*
    We could and should use here priority queue for classrooms
    but I didn't have nerves to implement it that way even though
    it is much more performant
*/
const assignClassroomsTo = (classes = []) => {
    classes.sort((c1, c2) => c1.start - c2.start);
    const classrooms = []
    for(cls of classes) {
        let j = 0;
        for(j = 0; j < classrooms.length; j++) {
            let classroom = classrooms[j]
            let foundClassroomForClass = false;
            if(classroom.every(clsInClassroom => clsInClassroom.end <=cls.start)) {
                classroom.push(cls);
                foundClassroomForClass = true;
                break;
            } 
            if(foundClassroomForClass) {
                break;
            }
        }
        if(j === classrooms.length) {
            classrooms.push([cls])
        }
    }
    return classrooms;
}

describe('Minimal classrooms for classes', () => {
    it('returns 2 sets of classroom with classes that dont overlap', () => {
        const classes = [
            {
                start: new Date().setHours(8, 0),
                end: new Date().setHours(8, 45),
                span: '8:00-8:45',
                name: 'math'
            },
            {
                start: new Date().setHours(10, 0),
                end: new Date().setHours(10, 45),
                span: '10:00-10:45',
                name: 'biology'
            },
            {
                start: new Date().setHours(9, 0),
                end: new Date().setHours(9, 45),
                span: '9:00-9:45',
                name: 'history'
            },
            {
                start: new Date().setHours(8, 30),
                end: new Date().setHours(9, 15),
                span: '8:30-9:15',
                name: 'music'
            },
            {
                start: new Date().setHours(10, 45),
                end: new Date().setHours(11, 30),
                span: '10:45-11:30',
                name: 'geography'
            },
            {
                start: new Date().setHours(10, 30),
                end: new Date().setHours(11, 15),
                span: '10:30-11:15',
                name: 'physics'
            }
        ]

        const schedule = assignClassroomsTo(classes)
        expect(schedule.length).toBe(2)
        expect(schedule[0].map(({ name }) => name)).toEqual(['math', 'history', 'biology', 'geography'])
        expect(schedule[1].map(({ name }) => name)).toEqual(['music', 'physics'])
    })
})