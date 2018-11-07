// Add the Componenet metadata  to make the class an Angular Component.
@Component({
    selector: 'students',
    template: '<h2>{{ getTitle() }} {{ getCurrentDate() }}</h2>'
})
// CREATE basic TypeScript class using Pascal casing
export class StudentsComponent{
    title = "My list of Students";
    getTitle(){
        return this.title;
    }
    getCurrentDate(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; // Jan is 0;
        var yyyy= today.getFullYear();

        console.log(mm + '/' + dd + '/' + yyyy);
    }
}
// Import the Componenet decorator from angular core.
import { Component } from '@angular/core';import { template } from '@angular/core/src/render3';

