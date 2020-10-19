function echo(message: string): string | null {
  return message;
}

let nullableMessage = echo('Hi');

// echo.call('Hi!!!') //?strictBindCallApply