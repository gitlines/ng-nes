import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent, ButtonComponentProps } from './button.component';
import { getSingleNativeElement } from '../../test-helpers';

describe('ButtonComponent', () => {
    let testSubject: ButtonComponent;
    let fixture: ComponentFixture<ButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ButtonComponent ]
        });

        fixture = TestBed.createComponent(ButtonComponent);
        testSubject = fixture.componentInstance;

        testSubject.props = {} as ButtonComponentProps;
    }));

    describe('render', () => {

        it('creates a button with class "nes-btn"', () => {
            // Given
            const expectedTagName = 'BUTTON';

            // When
            fixture.detectChanges();

            // Then
            const balloon = getSingleNativeElement(fixture, '.nes-btn');
            expect(balloon).toBeTruthy();
            expect(balloon.tagName).toEqual(expectedTagName);
        });

        it('adds inline style on the image', () => {
            // Given
            const expectedStyle = 'blue';
            testSubject.props.style = {background: expectedStyle};

            // When
            fixture.detectChanges();

            // Then
            expect(getSingleNativeElement(fixture, '.nes-btn').style.background).toEqual(expectedStyle);
        });

        it('sets additional classes on the div', () => {
            // Given
            testSubject.props.primary = true;

            // When
            fixture.detectChanges();

            // Then
            expect(getSingleNativeElement(fixture, '.nes-btn').classList).toContain('is-primary');
        });
    });

    describe('#onClick()', () => {

        it('emits click event', () => {
            // Given
            spyOn(testSubject.click, 'emit');

            // When
            testSubject.onClick();

            // Then
            expect(testSubject.click.emit).toHaveBeenCalled();
        });
    });

    describe('#onHover()', () => {

        it('emits hover event', () => {
            // Given
            spyOn(testSubject.hover, 'emit');

            // When
            testSubject.onHover();

            // Then
            expect(testSubject.hover.emit).toHaveBeenCalled();
        });
    });

    describe('classList()', () => {

        it('returns empty object if no props have been given', () => {
            // Given
            testSubject.props = null;
            const expectedClassList = {};

            // When
            const result = testSubject.classList;

            // Then
            expect(result).toEqual(expectedClassList);
        });

        it('object has "is-primary" set to true if props.primary is true', () => {
            // Given
            testSubject.props.primary = true;

            // When
            const result = testSubject.classList;

            // Then
            expect(result['is-primary']).toEqual(true);
        });

        it('object has "is-success" set to true if props.success is true', () => {
            // Given
            testSubject.props.success = true;

            // When
            const result = testSubject.classList;

            // Then
            expect(result['is-success']).toEqual(true);
        });

        it('object has "is-warning" set to true if props.warning is true', () => {
            // Given
            testSubject.props.warning = true;

            // When
            const result = testSubject.classList;

            // Then
            expect(result['is-warning']).toEqual(true);
        });

        it('object has "is-error" set to true if props.error is true', () => {
            // Given
            testSubject.props.error = true;

            // When
            const result = testSubject.classList;

            // Then
            expect(result['is-error']).toEqual(true);
        });

        it('object has "is-disabled" set to true if props.disabled is true', () => {
            // Given
            testSubject.props.disabled = true;

            // When
            const result = testSubject.classList;

            // Then
            expect(result['is-disabled']).toEqual(true);
        });
    });
});
