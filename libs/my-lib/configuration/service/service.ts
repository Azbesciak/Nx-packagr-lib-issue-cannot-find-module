import {Dependant} from "@impl-dep/my-lib/some/another/dependant";

export class Service {
  constructor(
    private dependant: Dependant
  ) {
  }

  dependency() {
    return this.dependant.dependency;
  }
}
