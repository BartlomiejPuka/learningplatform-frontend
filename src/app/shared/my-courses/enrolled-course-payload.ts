import {LessonProgressPayload} from './lesson-progress-payload';
import {TaskProgressPayload} from './task-progress-payload';


export class EnrolledCoursePayload {
  constructor(
    public courseId: number,
    public courseTitle: string,
    public courseIconUrl: string,
    public purchasedDate: Date,
    public completed: boolean,
    public totalLessonsCount: number,
    public totalTasksCount: number,
    public completedLessonsCount: number,
    public completedTasksCount: number,
    public lessonProgressList: Array<LessonProgressPayload>,
    public taskProgressList: Array<TaskProgressPayload>
  ) {
      this.courseId = courseId;
      this.courseTitle = courseTitle;
      this.courseIconUrl = courseIconUrl;
      this.purchasedDate = purchasedDate;
      this.completed = completed;
      this.totalLessonsCount = totalLessonsCount;
      this.totalTasksCount = totalTasksCount;
      this.completedLessonsCount = completedLessonsCount;
      this.completedTasksCount = completedTasksCount;
      this.lessonProgressList = lessonProgressList;
      this.taskProgressList = taskProgressList;
  }

}
