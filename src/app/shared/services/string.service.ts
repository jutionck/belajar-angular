import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {


  upperCase(text: string): string {
    return `Text before: ${text}, text after: ${text.toUpperCase()}`
  }
}
