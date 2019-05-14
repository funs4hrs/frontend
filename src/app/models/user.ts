export class User {
    Id: number;
    FirstName: string;
    LastName: string;
    Email: string;
    Password: String;
    HourlyWage: number;
    Adress: string;
    City: string;
    IsManager: boolean;

    constructor(FirstName: string,
        LastName: string,
        Email: string,
        Password: String,
        HourlyWage: number,
        Adress: string,
        City: string,
        IsManager: boolean,){}

}

// @Id
// @GeneratedValue(strategy = GenerationType.IDENTITY)
// @Column(name = "id", updatable = false, nullable = false)
// private Long Id;
// @Getter
// private String FirstName;
// @Getter
// private String LastName;
// @Getter
// private String Email;
// @Getter
// private String Password;
// @Getter
// private Double HourlyWage;
// @Getter
// private String Adress;
// @Getter
// private String City;
// @Getter
// private Boolean IsManager;