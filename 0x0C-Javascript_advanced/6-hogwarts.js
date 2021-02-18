// students Hogwarts

class studentHogwarts {
    constructor(privateScore = 0, name = null) {
        this.privateScore = privateScore;
        this.name = name;
    }

    changeScoreBy(points) {
        this.privateScore += points;
    }

    setName(newName){
        this.name = newName;
    }

    rewardStudent(){
        this.changeScoreBy(1);
    }

    penalizeStudent(){
        this.changeScoreBy(-1);
    }

    getScore(){
        return `${this.name}: ${this.privateScore}`
    }

}

let harry = new studentHogwarts(0,'Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

console.log(harry.getScore());

let draco = new studentHogwarts(0,'Draco')
draco.rewardStudent(1);
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
