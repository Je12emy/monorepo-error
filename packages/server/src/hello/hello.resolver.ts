import { Query, Resolver } from "type-graphql/dist/decorators";

@Resolver()
export default class HelloResolver {
  @Query()
  hello(): String {
    return "Hi";
  }
}
