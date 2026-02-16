
export interface Command {
  name: string;
  description: string;
  usage?: string;
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  commands: Command[];
}

export interface BotHelpData {
  name: string;
  prefix: string;
  categories: Category[];
}
