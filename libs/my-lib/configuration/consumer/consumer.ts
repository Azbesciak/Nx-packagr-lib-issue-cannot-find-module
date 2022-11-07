import {Service} from "@impl-dep/my-lib/configuration/service";

export class Consumer {
  constructor(
    private service: Service,
  ) {
  }

  dependency() {
    return this.service.dependency();
  }
}
