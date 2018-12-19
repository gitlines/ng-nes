import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxComponent, CheckboxComponentProps } from './checkbox.component';
import { getSingleNativeElement } from '../../test-helpers';

describe('CheckboxComponent', () => {
  let testSubject: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxComponent]
    });

    fixture = TestBed.createComponent(CheckboxComponent);
    testSubject = fixture.componentInstance;

    testSubject.props = {} as CheckboxComponentProps;
  }));

  describe('render', () => {

    it('creates a label with the class "nes-checkbox-parent', () => {
      // Given
      const expectedTagName = 'LABEL';

      // When
      fixture.detectChanges();

      // Then
      const checkbox = getSingleNativeElement(fixture, '.nes-checkbox-parent');
      expect(checkbox).toBeTruthy();
      expect(checkbox.tagName).toEqual(expectedTagName);
    });

    it('creates a input with the class "nes-checkbox', () => {
      // Given
      const expectedTagName = 'INPUT';

      // When
      fixture.detectChanges();

      // Then
      const checkbox = getSingleNativeElement(fixture, '.nes-checkbox');
      expect(checkbox).toBeTruthy();
      expect(checkbox.tagName).toEqual(expectedTagName);
    });

    it('adds inline style on the input', () => {
      // Given
      const expectedStyle = 'blue';
      testSubject.props.style = {background: expectedStyle};

      // When
      fixture.detectChanges();

      // Then
      expect(getSingleNativeElement(fixture, '.nes-checkbox').style.background).toEqual(expectedStyle);
    });
  });

  describe('#onChange()', () => {

    it('emits change event', () => {
      // Given
      spyOn(testSubject.change, 'emit');

      // When
      testSubject.onChange();

      // Then
      expect(testSubject.change.emit).toHaveBeenCalled();
    });
  });
});
