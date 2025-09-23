export class DataService {
  private data: string[] = ["Tom", "Bob", "Sam"];

  getData(): string[] {
    return this.data;
  }

  addData(data: string) {
    this.data.push(data);
  }
}
