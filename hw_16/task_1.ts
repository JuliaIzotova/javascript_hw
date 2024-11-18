interface IEmployee {
    name: string,
    salary: number,
    isManager: boolean
}

const QA: IEmployee = {
    name: 'Julia',
    salary: 1000,
    isManager: true
}

type EmployeeKeys = keyof IEmployee;

type QaKeys = keyof typeof QA;

type UserType = typeof QA;

type OptionalEmployee = Partial<IEmployee>;

type EmployeeNameAndSalary = Pick<IEmployee, 'name' | 'salary'>;

type EmployeeWithoutManager = Omit<IEmployee, 'isManager'>;

type ReadonlyEmployee = Readonly<IEmployee>;

type RecordQA = Record<string, keyof typeof QA>


// const STATUSES = {
//     OK: 200,
//     created: 201,
//     deleted: 204
// } as const;
// type Statuses = typeof STATUSES;
// type ObjectValueType<T extends object> = T[keyof T];
// function verifyResponce(status: ObjectValueType<Statuses>) {
//     return status === STATUSES.OK;
// }