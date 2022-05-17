import { Model } from "./Model";
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync'
import { Eventing } from './Eventing';
import { Collection } from "./Collection";

// Object to store information about a particular user
export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

// Option #1
// Accept dependencies as second constructor agrument

// Option 2
// Onlu accept dependencies into constructor
// Define a static class method to preconfigure
// User and assign properties afterwards

/**
 * static fromData(data: UserProps): User {
 *  const user = new User(new Eventing());
 *  user.set(data);
 *  return user;
 * }
 * private data: UserProps;
 * constructor(private events: Eventing) {}
 */

// Option 3
// Only accept properties into constructor
// Hard code dependencies as class properties 
const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl)
        );
    }

    static buildUserCollection(): Collection<User, UserProps>{
        return new Collection<User, UserProps>(
            rootUrl,
            (json: UserProps) => User.buildUser(json)
        )
    }

    setRandomAge(): void {
        const age = Math.round(Math.random() * 100);
        this.set({ age });
    }
    
}