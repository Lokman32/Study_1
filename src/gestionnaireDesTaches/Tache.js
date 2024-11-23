export default class Tache {
  static count = 0;

  constructor(desc, id = Tache.count++, terminee = false) {
    this.id = id;
    this.description = desc;
    this.terminee = terminee;
  }

  toggleTerminee() {
    return new Tache(this.description, this.id, !this.terminee);
  }
}
