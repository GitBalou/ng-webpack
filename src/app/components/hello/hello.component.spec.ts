import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { async } from '@angular/core/testing';
import { HelloComponent } from './hello.component';

describe('HelloComponent (templateUrl)', () => {

    let comp:    HelloComponent;
    let fixture: ComponentFixture<HelloComponent>;
    let de:      DebugElement;
    let el:      HTMLElement;


    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ HelloComponent ], // declare the test component
        });

        fixture = TestBed.createComponent(HelloComponent);

        comp = fixture.componentInstance; // BannerComponent test instance

        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });

    it('should display original title', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.name);
    });

    it('should display a different test title', () => {
        comp.name = 'Test Title';
        fixture.detectChanges();
        expect(el.textContent).toContain('Test Tikktle');
    });

/*
    Test runs in webpack bundle, so it seems that asynchronous beforeEach is useless
    while using templateUrl !

    // async beforeEach
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BannerComponent ], // declare the test component
        })
            .compileComponents();  // compile template and css
    }));

    // synchronous beforeEach
    beforeEach(() => {
        fixture = TestBed.createComponent(BannerComponent);

        comp = fixture.componentInstance; // BannerComponent test instance

        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });

    it('should display original title', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });

    it('should display a different test title', () => {
        comp.title = 'Test Title';
        fixture.detectChanges();
        expect(el.textContent).toContain('Test Title');
    });
    */
});